import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState, useEffect} from 'react'

const token = process.env.API_TOKEN;

console.log(token);
export default function Home() {
  const [searchTxt, setSearchTxt] = useState("");
  const [list, setList]= useState({});
  

  useEffect(() => {
    
  }, [])

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      doSearch();
    }
  }
  const doSearch = () => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTxt}&key=AIzaSyBOaQR9WxdSm6AOMbfSn-aCZeDpMH0T_Bw`;
    fetch(url).then(r => r.json()).then(data => {
      console.log(data);
      setList(data);
  })
  }
  return (



    <div className={styles.container}>
      <Head>
        <title>Create Next App V2</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className={styles.main}>
        <h1>Welcome to Next Sample</h1>
        <h4 className={styles.title}>

          <div>
            <span style={{fontSize: 20, marginRight: 10}}>Search</span>
            <input type='text' value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} style={{padding: 10, width: 600}} onKeyDown={onKeyDown}/>
          </div>
        </h4>
        <ul>
         {
          list.items && list.items.map(item => 
            <li key={item.etag}>
            <div>
              <div>{item.snippet.title}</div>
              <div>
                {
                    <img src={item.snippet.thumbnails.default.url} width={item.snippet.thumbnails.default.width} height={item.snippet.thumbnails.default.height}/>
                }
              </div>
            </div>
            </li>
          )
        }
        </ul>
      </main>
        
    </div>
  )
}
