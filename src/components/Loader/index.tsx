import styles from './loader.module.css'

const Loader = () => {
	return (
		<div className={styles.loader_wrapper}>
			<div className={styles.loader}></div>
		</div>
	)
}

export default Loader
