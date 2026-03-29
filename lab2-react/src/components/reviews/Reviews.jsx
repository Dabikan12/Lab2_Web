import { useState, useEffect } from 'react';
import styles from './Reviews.module.css';

function Reviews() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/19/comments')
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Відгуки</h2>
            <div className={styles.list}>
                {comments.slice(0, 3).map(comment => (
                    <div key={comment.id} className={styles.card}>
                        <h4 className={styles.author}>{comment.email}</h4>
                        <p className={styles.text}>{comment.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Reviews;