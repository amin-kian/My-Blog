import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

export default function PostItem({title, image, excerpt, date, slug}) {
    const formatDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <li className={classes.post}>
            <Link href={`/posts/${slug}`}>
                <div className={classes.image}>
                    <Image src={`/images/posts/${slug}/${image}`} alt={title} width={300} height={200}
                           layout='responsive'/>
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{formatDate}</time>
                    <p>{excerpt}</p>
                </div>
            </Link>
        </li>
    )
}