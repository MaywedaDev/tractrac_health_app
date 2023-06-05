import { Divider } from "@mui/material";

const Section = ({title, children, divider}) => {
    return (<>
        <div className="p-3 dark:text-white text-[12px]">
            <p className="mb-2 uppercase font-semibold">{title}</p>
            {children}
        </div>
        {divider && <Divider />}
        
    </> 
     );
}
 
export default Section;