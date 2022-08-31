import PropTypes from 'prop-types'

const SiteText = ({title, description, color, height, borderColor}) => {
    return ( 
        <section style={{height:`${height}`, backgroundColor:`${color}`, border:`2px solid ${borderColor}`, color:"#000", wordBreak:"break-all", padding:"20px 20px"}} className={`container col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 alert  my-5`} role="alert">
       <h3 style={{margin:"10px 0"}}>{title}</h3>
       <p>{description}</p>
       </section>
     );
}

SiteText.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    borderColor: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired
}
 
export default SiteText;