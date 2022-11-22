const Course = () => {
    const course = [            
    "내과",
    "신경과",
    "외과",
    "정형외과",
    "신경외과",
    "마취통증의학과",
    "피부과",
    "재활의학과",
    "가정의학과",
    "한방내과",
    "한방재활의학과",
    "침구과",
    "이비인후과",
    "산부인과",
    "마취통증의학과",
    "소아청소년과",
    "영상의학과",
    "응급의학과"]
    
    const BtnFilter = () => {
        console.log();
    }
    
    return (
            <>
            {
            course.map((item, index) => (<button onClick={BtnFilter} style={{margin : "0.5em"}}>{course[index]}</button>))
            }

            <div>
                {/* {Hospital.filter((value)=>(
                ))} */}
            </div>
            </>
    );
}

export default Course;