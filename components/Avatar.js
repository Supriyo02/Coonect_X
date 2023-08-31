export default function Avatar({size}) {
    let width='w-11';
    if(size==='lg'){
        width='w-32 md:w-36';
    }
    return (
        <div className="p-2">
            <img className={`${width} rounded-full overflow-hidden`} src="/profile.jpg" alt="" />
        </div>
    )
};