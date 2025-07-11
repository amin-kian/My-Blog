import Logo from "./logo";
import Link from "next/link";
import classes from './main-navigation.module.css'

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <Link href='/'>
                <Logo/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link href='/contact'>Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}