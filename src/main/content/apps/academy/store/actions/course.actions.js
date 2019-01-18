import axios from 'axios/index';
import {showMessage} from 'store/actions/fuse';

export const GET_COURSE = '[ACADEMY APP] GET COURSE';
export const SAVE_COURSE = '[ACADEMY APP] SAVE COURSE';
export const UPDATE_COURSE = '[ACADEMY APP] UPDATE COURSE';

export function getCourse(params)
{
    //const request = axios.get('/api/academy-app/course', {params});
    const course ={
        title:"Test",
        activeStep:0,
        steps:[{title:"Tset1",content:"<div>Page onetest</div>"},
        {title:"Tset2",content:"<div>Page onetest</div>"},
        {title:"Tset3",content:"<div>Page twotest</div>"},
        {title:"Tset4",content:"<div>Page threetest</div>"}]
  
    };

   return  {
        type   : GET_COURSE,
        payload:{
            title:"Test",
            activeStep:0,
            steps:[{id:0,title:"Tset1",content:"<div>Page onetest</div>"},
            {id:1,title:"Tset2",content:"<div>Page onetest</div>"},
            {id:2,title:"Tset3",content:"<div>Page twotest</div>"},
            {id:3,title:"Tset4",content:"<div>Page threetest</div>"}]
      
        }
    };
    // return (dispatch) =>
    //     request.then((response) =>
    //         dispatch({
    //             type   : GET_COURSE,
    //             payload: response.data
    //         })
    //     );
    

    // return (dispatch) =>
    //     request.then((response) =>
    //         dispatch({
    //             type   : GET_COURSE,
    //             payload: response.data
    //         })
    //     );
}

export function saveCourse(data)
{
    console.log("Respose data======"+JSON.stringify(response));
    const request = axios.post('/api/academy-app/course/save', data);

    return (dispatch) =>
        request.then((response) => {

                dispatch(showMessage({message: 'Course Saved'}));

                return dispatch({
                    type   : SAVE_COURSE,
                    payload: response.data
                })
            }
        );
}

export function updateCourse(data)
{

    return (dispatch, getState) => {

        const {id} = getState().academyApp.course;
        const request = axios.post('/api/academy-app/course/update', {id, ...data});

        request.then((response) => {

                dispatch(showMessage({message: 'Course Updated'}));
                console.log("Respose data======"+JSON.stringify(response));
                return dispatch({
                    type   : UPDATE_COURSE,
                    payload: response.data
                })
            }
        );
    }
}
