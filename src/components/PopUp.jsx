function PopUp() {
	return (
        <div className="pop__up">
            <img className="cancel__btn" src="/cancel.svg" alt="" />
            <div className="img__cover">
                <img src="/gifs/ad-2.gif" alt="" /> 
            </div>
            <div className="text">
                <h2>Become a volunteer</h2>
                <p>We're actively seeking enthusiastic volunteers and contributors like you to join our growing community. Your contributions will not only benefit others but also help you strengthen your own understanding of the subjects you're passionate about. Teaching and explaining concepts to others is a powerful way to deepen your own knowledge and reinforce your grasp of the material.</p>
                <button>Volunteer</button>
            </div>
        </div>
    );
}
export default PopUp;
