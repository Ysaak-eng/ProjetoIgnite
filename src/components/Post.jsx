import {format,formatDistanceToNow} from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from './Post.module.css';
import { Coments } from './Coments';
import { Avartar } from './Avatar';
import { useState } from 'react';



export function Post({author , content , publishedDate}) {

   
    const [comments,setComent] = useState([
    ])

    const [newCommenstext,setNewCommenstext] = useState('') 
   
    const date = new Date('2202-06-13')

        const publisheFromat = format(new Date('2202-06-13'),"d 'de' LLLL 'ás' HH:mm 'h'",{
            locale:ptBR
        })

        const publishedDateRelative = formatDistanceToNow(new Date('2022-06-13'),{
            locale:ptBR,
            addSuffix:true
        })


        function handleCrateNewComment(){
          
            event.preventDefault();
            
            setComent([...comments , newCommenstext])

            setNewCommenstext('');


        }

        function handleNewCommentChange(){
            setNewCommenstext(event.target.value);
            
        }
    
  
    return (
        <article className={styles.post} >
            <header>
                <div  className={styles.author} >
                    <Avartar   src={author.AvatarUrl} />
                    <div className={styles.authorInfo} >
                        <strongos>{author.name}</strongos>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publisheFromat} dateTime={date.toISOString()} >
                    {publishedDateRelative}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line=>{
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    } else if(line.type === 'link') {
                            return <p><a href="">{content.link}</a></p>
                    }
                })}
            </div>

           <form onSubmit={handleCrateNewComment} className={styles.comentForm} >
            <strong>Deixe o seu feedback</strong>
            
            <textarea
            name="comment"
            placeholder='Deixe o seu comentario'
            onChange={handleNewCommentChange}
            value={newCommenstext}
            
            />
            
            <footer>
            <button type='submit'>Publicar</button>
            </footer>
           </form>
                <div>
                    {comments.map(coment=>{
                        return  <Coments content={coment}/>  
                    })}
                                  
                </div>
        </article>
    )
}