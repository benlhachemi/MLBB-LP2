//imports
import English   from './english'
import Indonesia from './indonesia'

const Stepper = ({lang, actions, TagManager}) => {

    //main render
    return (
        <div>
            {lang.slice(0,2) == 'id' ? <Indonesia actions={actions} /> : <English actions={actions} />}
        </div>
    )
}

export default Stepper
