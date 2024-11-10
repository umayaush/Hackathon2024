import Navbar from '../components/Navbar';
import styles from './Page.module.css';

export default function Page() {
    return (
        <div className="flex min-h-screen bg-[#F8EDEB]">
            <Navbar />
            <main className={styles.mainContent}>
                {/* Title */}
               <h1 className={styles.title}>Account Settings</h1>
               {/* Profile Section */}
               <div className={styles.profileSection}>
                    <img
                        src="https://via.placeholder.com/80"
                        alt="Profile"
                        className={styles.profileImage}
                    />
                    <div>
                        <p className={styles.label}>Name</p>
                        <input type="email" placeholder="Your First Name" className={styles.inputField}></input>
                    </div>
                    
                    <button className={styles.editButton}>Edit</button>
                </div>

                {/* Form Section */}
                <form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Username</label>
                        <input type="text" placeholder="Your Username" className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Gender</label>
                        <select className={styles.inputField}>
                            <option>Your Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Email</label>
                        <input type="email" placeholder="Your Email Address" className={styles.inputField} />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Primary Language</label>
                        <input type="text" placeholder="Your Primary Language" className={styles.inputField} />
                    </div>
                </form>
            </main>
        </div>
    );
}