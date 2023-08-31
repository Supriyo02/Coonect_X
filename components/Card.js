export default function Card({children,noPadding,noShadow}){
    let classes="bg-white rounded-md mb-5";
    if(!noPadding){
        classes+=' ';
    }
    if(!noShadow){
        classes+=' shadow-md shadow-gray-500'
    }
    return(
        <div className={classes}>
            {children}
        </div>
    );
}