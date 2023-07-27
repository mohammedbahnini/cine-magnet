import loader from '../../assets/double-rings.svg';

export function ImageLoader(){
    return (
        <div className="image-loader" >
            <img className='image' src={loader} alt="Loader" 
            style={{
                width : '4rem' , 
                aspectRatio : '1 / 1',
                objectFit : 'contain'  
                }} 
                />
        </div>
    )
}