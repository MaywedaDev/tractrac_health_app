import globe from '../../assets/globe.png'

const MapChart = () => {
    return ( <>
        <div className="w-full h-[236px] relative">
            <img className='left-0 right-0 top-0 bottom-0 opacity-50 absolute' src={globe} alt="" />
        </div>
    </> );
}
 
export default MapChart;