import Head from 'next/head'
export default function HeaderComponent(props){
 
    return (
      <>
          <Head>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta name="author" content="phuong"/>
              <meta name="description" content="Search your movie" />
              <meta name="keywords" content="Search film" />
              <title>{props.title}</title>
          </Head>
          
      </>
  )
  
}