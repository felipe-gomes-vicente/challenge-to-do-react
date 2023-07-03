import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useState, FormEvent, ChangeEvent } from 'react';

import todoLogo from './../../assets/todoLogo.svg'

import styles from './header.module.css'

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("")

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    onAddTask(title)
    setTitle("")
    
  }

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }

  const isNewTitleEmpty = title.trim().length === 0;

  return (
    <header className={styles.header} >
      <img src={todoLogo} alt="" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input type="text" onChange={onChangeTitle} value={title} placeholder='Adicione uma nova tarefa' />
        <button disabled={isNewTitleEmpty}>
          Criar 
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  )
}