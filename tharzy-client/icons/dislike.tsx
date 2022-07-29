export default function Dislike({bold}: {bold?: boolean}) {
    if (bold) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M23.951,12.3l-.705-5A5.024,5.024,0,0,0,18.3,3H8V18.584l1.626,3.3a3.038,3.038,0,0,0,5.721-1.838L15.011,18H19a5,5,0,0,0,4.951-5.7Z"/><path d="M0,8v5a5.006,5.006,0,0,0,5,5H6V3H5A5.006,5.006,0,0,0,0,8Z"/></svg>
        )
    }

    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"><path d="M23.951,12.3l-.705-5A5.024,5.024,0,0,0,18.3,3H5A5.006,5.006,0,0,0,0,8v5a5.006,5.006,0,0,0,5,5H7.712l1.914,3.878a3.037,3.037,0,0,0,5.721-1.837L15.011,18H19a5,5,0,0,0,4.951-5.7ZM5,5H7V16H5a3,3,0,0,1-3-3V8A3,3,0,0,1,5,5Zm16.264,9.968A3,3,0,0,1,19,16H13.833a1,1,0,0,0-.987,1.162l.528,3.2a1.024,1.024,0,0,1-.233.84,1.07,1.07,0,0,1-1.722-.212L9.23,16.558A1,1,0,0,0,9,16.266V5h9.3a3.012,3.012,0,0,1,2.97,2.581l.706,5A3,3,0,0,1,21.264,14.968Z"/></svg>
    )
}