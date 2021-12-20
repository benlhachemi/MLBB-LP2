//imports
import English from './english'

const Stepper = ({lang}) => {

    //main render
    return (
        <div>
            {lang.slice(0,2) == 'en' && <English />}
            {lang.slice(0,2) == 'id' && <>Indonesian Version</>}
            {lang.slice(0,2) == 'tr' && <>Turkish Version</>}
            {lang.slice(0,2) == 'ph' && <>Philippine Version</>}
            {lang.slice(0,2) == 'ar' && <>Arabic Version</>}
        </div>
    )
}

export default Stepper
