const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.render('index.html',{ tittle: 'First WebSite'});
});

router.get('/gamesite',(req,res)=>{
    res.render('gamesite.html',{ tittle: 'Game Site Page'});
});

module.exports = router;