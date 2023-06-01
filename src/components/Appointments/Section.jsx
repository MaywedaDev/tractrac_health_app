import { Divider } from "@mui/material";

const Section = ({title, children}) => {
    return (<>
        <div className="p-3 dark:text-white text-[12px]">
            <p className="mb-2 uppercase">{title}</p>
            {children}
        </div>
        <Divider />
    </> 
     );
}
 
export default Section;