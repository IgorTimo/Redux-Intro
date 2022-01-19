import { connect } from "react-redux";


const Likes = (props) => {
    console.log('render>>> ',props);
    return ( <div className="button-controls">
        <button onClick={props.onIncremetLikes}> ❤ {props.likes}</button>
        <button>Dislike</button>

    </div> );
}

function mapStateToProps(state) {
    console.log("mapStateToProps>>> ", state);
    return {
        likes: state.likes
    }
}

function mapDispachToProps(dispach) {

    return {
        onIncremetLikes: () => {
            console.log('click')
            const action = {
                type: "INCREMENT"
            }
            dispach(action);
        } 
    }
}
 
export default connect(mapStateToProps, mapDispachToProps)(Likes) ;