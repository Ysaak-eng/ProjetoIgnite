  import styles from './Avatar.module.css'
  export function Avartar({falseBorder  = true , src}){
    
    return(
        <img className={falseBorder ? styles.avatarWithBorder : styles.Avatar} src={src} alt="Avatar do personagem" />
    )
}