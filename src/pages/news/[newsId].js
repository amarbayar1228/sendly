import Banner from "@/components/banner";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router"; 

export const getStaticPaths = async () =>{

    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json();
    const paths = data.map(post =>{
        return{
            params: {
                newsId: `${post.id}`
            }
        }
    })
    return{ 
            paths,
            fallback: true, 
    } 
}
export async function generateMetadata({params}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.newsId}`);
    const prod = await res.json();
    return{
        title: prod.id,
        description: prod.name,
        openGraph: {
            images: `https://itc-sigma.vercel.app/images/news/${prod.id}.jpg`
        }
    }
}
 
export const getStaticProps = async (context) =>{
    const {params} = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.newsId}`)
    const data = await res.json();
    return{
        props: {
            post: data,
        }
    }   
}
 
  
const NewsId = ({post}) =>{
    const router = useRouter();
    if(router.isFallback){
        return<div>Loading..</div>
    }
    
    return<section>
        <Head>
            <title>{post.name}</title>
            <meta name="description" content={post.name} key="desc"/>  
        </Head> 
        <section>
            {/* <Banner /> */}
            <div>
                {/* <Image fill={false} priority={true}  src={"/images/news/" + post.id + ".jpg"} width={1000} height={1000}  alt="aaa" className="w-full h-auto" /> */}
            </div>
            <div>id: {post.id}</div>   
            <div>title: {post.name}</div>
            <div> 
                <div>description: </div>
                <div>
                    {post.name}
                </div>
                
            </div>
        </section>
    </section>
}
export default NewsId;