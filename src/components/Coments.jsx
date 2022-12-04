import styles from './Coments.module.css'
import imgAvatar from '../assets/Avatar.jpg'
import {ThumbsUp, Trash} from 'phosphor-react'
import { Avartar } from './Avatar';

export function Coments({content }){

    console.log(coment)
return(
  <div className={styles.comment} >
    <Avartar falseBorder={false} src={imgAvatar} />
        <div className={styles.commentBox} >
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>
                     Ysaak Silverios dos Santos
                    </strong>
                    <time title='11 de Maio ás 08:13h ' dateTime='2022-11-12' >Cerca de 1h atrás</time>
                </div>

                <button> 
                    <Trash size={20}/>
                </button>

            </header>
            <p>{content}
            </p>
        </div>

        <footer>
            <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
            </button>
        </footer>
        </div>
          
  </div>
)
}
