import styles from "./ContainerWorks.module.css";

function ContainerWorks({children}) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}

export default ContainerWorks;