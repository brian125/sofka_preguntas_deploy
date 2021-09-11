const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const playersController = require('../controllers/playersController');
const authController = require('../controllers/authController');
const questionsController = require('../controllers/questionsController');


module.exports = function() {
    //Landing page
    router.get('/', homeController.home);

    //Game rules
    router.get('/rules', homeController.rules);

    //Create user
    router.get('/create-user', playersController.formCreateUser);
    router.post('/create-user', playersController.createNewUser);

    //Log in
    router.get('/log-in', playersController.formLogIn);
    router.post('/log-in', authController.authenticateUser);

    //Question 1
    router.get('/question1', 
        authController.userAuthenticated,
        questionsController.selectQuestionLevelOne
    );

    router.get('/question1/:idUser',
        authController.userAuthenticated,
        playersController.updatePointsLevelOne
    );

    //Question 2
    router.get('/question2', 
        authController.userAuthenticated,
        questionsController.selectQuestionLevelTwo
    );

    router.get('/question2/:idUser',
        authController.userAuthenticated,
        playersController.updatePointsLevelTwo
    );

    //Question 3
    router.get('/question3', 
        authController.userAuthenticated,
        questionsController.selectQuestionLevelThree
    );

    router.get('/question3/:idUser',
        authController.userAuthenticated,
        playersController.updatePointsLevelThree
    );

    //Question 4
    router.get('/question4', 
        authController.userAuthenticated,
        questionsController.selectQuestionLevelFour
    );

    router.get('/question4/:idUser',
        authController.userAuthenticated,
        playersController.updatePointsLevelFour
    );

    //Question 5
    router.get('/question5', 
        authController.userAuthenticated,
        questionsController.selectQuestionLevelFive
    );

    router.get('/question5/:idUser',
        authController.userAuthenticated,
        playersController.updatePointsLevelFive
    );

    //Retire
    router.get('/retire', 
        authController.userAuthenticated,
        questionsController.retire
    );

    //Lose
    router.get('/lose', 
        authController.userAuthenticated,
        questionsController.lose
    );

    //Win
    router.get('/win', 
        authController.userAuthenticated,
        questionsController.win
    );

    return router;
}