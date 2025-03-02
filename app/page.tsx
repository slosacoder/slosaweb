import { Roboto } from 'next/font/google';
import SplitText from "../blocks/TextAnimations/SplitText/SplitText";
import Blob from "../blocks/Animations/BlobCursor/BlobCursor";

import './main.css';

const roboto = Roboto({ subsets: ['latin'], weight: ['500']});

export default function Home() {
    return (
        <main className={roboto.className}>
            <div className="text-container">
                    <SplitText
                        text="Hi, I'm slosa"
                        className="main-text"
                        delay={800}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                    <SplitText
                        text="a young czech developer, audio tinkerer, student and musicican"
                        className="sub-text"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        threshold={0.2}
                        rootMargin="-50px"
                    />
            </div>
            <Blob fillColor={"white"}/>
        </main>
    )
}