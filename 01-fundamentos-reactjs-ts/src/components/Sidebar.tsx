import { PencilLine } from '@phosphor-icons/react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={styles.profile}>            
                <Avatar src="https://github.com/alessandro-ponte.png" />                
                <strong>Alessandro Ponte</strong>
                <span>Salesforce Developer</span>
            </div>

            <footer>
                <a href="">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}