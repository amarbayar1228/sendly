import Banner from "@/components/banner"; 
import LinkHoverButton from "@/components/buttons/linkHoverButton";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link"; 
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination"; 
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar,   } from "swiper";
import { useCallback, useRef } from "react";
 
const News = (props) =>{ 
    const [posts, setPosts] = useState([]);
    const [load, setLoad] = useState(false);
    const router = useRouter();
    useEffect(()=>{ 
        getData();
    },[])
    const getData=  async() =>{
        setLoad(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json();
        setLoad(false);
        setPosts(data.slice(0,8));
    }
    return<section>
         <Head>
            <title>Мэдээ мэдээлэл</title>
            <meta name="description" content="Check out news" key="desc" /> 
            <meta property="twitter:card" content="summary_large_image" />
        </Head>
        {props.page === "home"? null: <Banner title={"news"} type={false}/> }
        <section className='mt-9'> 
          <div className='max-w-7xl flex gap-4 mx-auto w-full max-lg:px-5 max-md:overflow-auto flex-col'>  

          {load ? <div>Loading... </div> :<>
          {posts ? 
          <> 
           <Swiper
            modules={[Navigation, Scrollbar]}
            spaceBetween={6}
            slidesPerView={4}
            navigation 
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            className="w-full bg-white"
          >
          {posts.map((post, i)=>(
            <SwiperSlide className="bg-white" key={i} > 
                <div className="group block relative bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] " key={i}>
                  <div className="relative  overflow-hidden bg-cover bg-no-repeat">
                    <Image  priority={true} className="transition duration-300 ease-in-out group-hover:scale-110 " src="/images/news/news1.jpg" alt="" width={800} height={500}/>
                  </div>
                  <div className="p-6">
                    <h5 className="mb-3 text-base font-medium leading-tight text-neutral-800 dark:text-neutral-50 max-md:text-sm"> Сугалаа цэс шинэчлэгдлээ цэс шинэчлэгдлээ </h5>
                    <Link href={`news/${post.id}`}> <LinkHoverButton name="Дэлгэрэнгүй"/></Link>
                  </div>
                </div>    
            </SwiperSlide>
            ))}   
          </Swiper> 
          </> : null}</> }
          
            <div className="flex rounded-lg">
                <div className="w-64 h-1 bg-sky-500 rounded-lg"></div>
                <div className="w-3/5 h-1 bg-sky-200 rounded-lg"></div>
            </div>

          </div>
  
      </section> 
       
    </section>
}
export default News;