import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/amin-img.png' alt='an image showing my self' width={300} height={300} />
            </div>
            <h1>Hi, Im Amin</h1>
            <p>I blog about web development - especially front-end frameworks</p>
        </section>
    )
}