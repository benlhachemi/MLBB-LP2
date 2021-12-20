//imports
import English   from './english'
import Indonesia from './indonesia'

const Stepper = ({lang}) => {

    //main render
    return (
        <div>
            {lang.slice(0,2) == 'id' ? <Indonesia /> : <English />}
        </div>
    )
}

export default Stepper
