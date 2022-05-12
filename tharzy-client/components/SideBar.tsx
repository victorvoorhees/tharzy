import Styles from '../styles/SideBar.module.css'

interface IProps {
    label?: string,
    sections: string[] | number[],
    value: string | number,
    handleClick: (e) => void,
    styles?: string
}

export default function SideBar({ label, sections, value, handleClick, styles }: IProps) {
    return (
        <div className={styles || undefined}>
            {label ? <div className={Styles.label}>{label}</div> : undefined}
            {sections.map((section, index) => (
                <div key={index} className={Styles.section} onClick={handleClick} data-viewing={value === section}>{section}</div>
            ))}
        </div>
    )
}