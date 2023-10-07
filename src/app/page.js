import HomeContent from '@/components/HomeContent';
import { getAllEmployees } from '@/services/employees';
import styles from './page.module.css';

export default async function Home() {
  const employees = await getAllEmployees(); 
  
  return (
    <main className={styles.main}>
      <HomeContent employees={employees}/>
    </main>
  )
}


