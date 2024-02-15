import styles from "./styles.module.css"

export default function Profile(props){
    return(
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.nome} />
            <h2>{props.titulo}</h2>
            <div className={styles.curso}>{props.curso}</div>
            <div>{props.tel}</div>
            <div>{props.email}</div>
            <div className={styles.links}>
                <a href={props.gitHubUrl} target="_blank">Git Hub</a>
                <a href={props.linkedin} target="_blank">Linkedin</a>
            </div>
        </div>
    )
}   