import './App.css';
import {useState} from 'react'; // state. hook.

// mode types.
const MODE_TYPES = {
  WELCOME: "WELCOME",
  READ: "READ",
	CREATE: "CREATE",
	UPDATE: "UPDATE",
}

function Header(props) {
  return (
    <header>
      <h1><a href='/' onClick={(event) => {
        event.preventDefault();
        props.onChangeMode();
      }}>{props.title}</a></h1>
    </header>
  );
}
function Nav(props) {
  const lis = [];
  for(let i=0; i<props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={'/read/' + t.id} onClick={event => {
      event.preventDefault();
      props.onChangeMode(Number(event.target.id));
    }}>{t.title}</a></li>);
  }
  return (
    <nav>
      <ol>
        {lis}
      </ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Create(props) {
  return (<article>
    <h2>Create</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onCreate(title, body);
    }}>
      <p><input type='text' name='title' placeholder='title'/></p>
      <p><textarea name='body' placeholder='body'/></p>
      <p><button type='submit' name='createbutton'>
        Create</button></p>
    </form>
  </article>);
}

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (<article>
    <h2>Update</h2>
    <form onSubmit={event => {
      event.preventDefault();
      const title = event.target.title.value;
      const body = event.target.body.value;
      props.onUpdate(title, body);
    }}>
      <p><input type='text' name='title' placeholder='title' value={title}
       onChange={event => {
        setTitle(event.target.value);
      }}/></p>
      <p><textarea name='body' placeholder='body' value={body}
       onChange={event => {
        setBody(event.target.value);
       }}/></p>
      <p><button type='submit' name='updatebutton'>
        Update</button></p>
    </form>
  </article>
  );
}

function App() {
  const [mode, setMode] = useState(MODE_TYPES.WELCOME);
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    {id:1, title:"html", body:"html is ..."},
    {id:2, title:"css", body:"css is ..."},
    {id:3, title:"javascript", body:"javascript is ..."}
  ]);
  const [nextId, setNextId] = useState(topics.length + 1);
  
  let content = null;
  let contextControl = null;

  switch (mode) {
    case MODE_TYPES.WELCOME: {
      content = <Article title="Welcome" body="Hello, Web"></Article>
      break;
    }
    case MODE_TYPES.READ: {
      let curTitle = null, curBody = null;
      for (let i=0; i<topics.length; i++) {
        console.log(topics[i].id, id);
        if (topics[i].id === id) {
          curTitle = topics[i].title;
          curBody = topics[i].body;
        }
      }
      content = <Article title={curTitle} body={curBody}></Article>
      contextControl = <>
        <li><a href={'/update/' + id} onClick={event => {
          event.preventDefault();
          setMode(MODE_TYPES.UPDATE);
        }}>Update</a></li>
        <li><button type='button' onClick={event => {
          const deletedTopics = [];
          for (let i = 0; i < topics.length; i++) {
            if (topics[i].id !== id) {
              deletedTopics.push(topics[i]);
            }
          }
          setTopics(deletedTopics);
          setMode(MODE_TYPES.WELCOME);
        }}>Delete</button></li>
      </>
      break;
    }
    case MODE_TYPES.CREATE: {
      content = <Create onCreate={(_title, _body) => {
        const newTopic = {id:nextId, title:_title, body:_body};
        const newTopics = [...topics];
        newTopics.push(newTopic);
        setTopics(newTopics);
  
        setId(nextId);
        setNextId(nextId + 1);
        setMode(MODE_TYPES.READ);
      }}></Create>
      break;
    }
    case MODE_TYPES.UPDATE: {
      let curTitle = null, curBody = null;
      for (let i=0; i<topics.length; i++) {
        console.log(topics[i].id, id);
        if (topics[i].id === id) {
          curTitle = topics[i].title;
          curBody = topics[i].body;
        }
      }
      content = <Update title={curTitle} body={curBody}
       onUpdate={(_title, _body) => {
        const updatedTopic = {id:id, title:_title, body:_body};
        const updatedTopics = [...topics];
        for (let i=0; i<updatedTopics.length; i++) {
          if (updatedTopics[i].id === id) {
            updatedTopics[i] = updatedTopic;
            break;
          }
        }
        setTopics(updatedTopics);
  
        setId(id);
        setMode(MODE_TYPES.READ);
      }}></Update>
      break;
    }
    default:
      break;
  }

  return (
    <div>
      <Header title="WEB" onChangeMode={() => {
        setMode(MODE_TYPES.WELCOME);
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id) => {
        setMode(MODE_TYPES.READ);
        setId(_id);
      }} ></Nav>
      <hr/>
      {content}
      <hr/>
      <ul>
        <li>
          <a href='/create' onClick={event => {
            event.preventDefault();
            setMode(MODE_TYPES.CREATE);
          }}>CREATE</a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

export default App;
