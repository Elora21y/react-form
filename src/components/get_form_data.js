/**
 * 1. e.target.[name of input field].value
 * 2. use form action and formData in the action handler. formData.get('name of the input field)
 * 3. controlled component--> one per each field , use state on change of the field, useful to dynamically handle error->(proti ta input field er jonno alada alada on change event lge ...tar jonno abr ekjta kore state declare krte hoy)
 * 
 * 4.  handle all controlled field on one state object
 * const [formData ,  setForData] = useState({
 * name: '',
 * password : '',
 * phone: '',
 * })
 * 
 * 
 * 5. uncontrolled using useRef
 * 
 * 6. custom hook form
 */
