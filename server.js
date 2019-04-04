var dummyData = {
    style: [{
            courseStyleID: '0',
            courseStyleName: 'ALL STYLE',
            courseStyleDesc: 'All Style',
            courseStyleImage: 'imgBanner/bg_all.png'
        },
        {
            courseStyleID: '1',
            courseStyleName: 'K-pop Junior',
            courseStyleDesc: '-',
            courseStyleImage: 'imgBanner/0136689001551345272--Mask Group 33.png'
        },
        {
            courseStyleID: '2',
            courseStyleName: 'K-pop Freshy',
            courseStyleDesc: '.',
            courseStyleImage: 'imgBanner/Group 173.png'
        },
        {
            courseStyleID: '3',
            courseStyleName: 'K-pop Pro',
            courseStyleDesc: '',
            courseStyleImage: 'imgBanner/Group 173.png'
        },
        {
            courseStyleID: '4',
            courseStyleName: 'K-pop Fitness',
            courseStyleDesc: '-',
            courseStyleImage: 'imgBanner/0106379001551345163--Mask Group 34.png'
        },
        {
            courseStyleID: '5',
            courseStyleName: 'Thai Junior',
            courseStyleDesc: '',
            courseStyleImage: 'imgBanner/Group 173.png'
        },
        {
            courseStyleID: '6',
            courseStyleName: 'Thai Fitness',
            courseStyleDesc: '',
            courseStyleImage: 'imgBanner/Group 173.png'
        },
        {
            courseStyleID: '10',
            courseStyleName: 'HIPHOP Dance',
            courseStyleDesc: '-',
            courseStyleImage: 'imgBanner/Group 173.png'
        },
        {
            courseStyleID: '12',
            courseStyleName: 'Rock & Roll',
            courseStyleDesc: 'Rock & Roll',
            courseStyleImage: 'imgBanner/Group 173.png'
        },
        {
            courseStyleID: '14',
            courseStyleName: 'สุนทรพร',
            courseStyleDesc: 'footage',
            courseStyleImage: 'imgBanner/0167440001551680080--The-1975.jpg'
        },
        {
            courseStyleID: '15',
            courseStyleName: 'Nammm',
            courseStyleDesc: 'แนม 123',
            courseStyleImage: 'imgBanner/0423371001551698032--1.jpg'
        }
    ]
}
var incorrectDummyData = {
    style: [
      {
        courseStyleID: '0',
        courseStyleName: 'ALL STYLE',
        courseStyleDesc: 'All Style',
        courseStyleImage: 'imgBanner/bg_all.png'
      }
    ]
  }

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.json());

/*
app.get('/api/youtube', (req, res) => {
    res.json({
        youtube: '555',
        message: 'get'
    })
});

app.post('/api/youtube', (req, res) => {
    res.json({
        youtube: '555',
        message: 'post'
    })
});
*/

app.route('/api/style')
    .get(function (req, res) {
        console.log('user: ' + req.query.user)
        console.log('pass: ' + req.query.pass)
        if (req.query.user == 'admin' && req.query.pass == 'pass') {
            res.json(dummyData)
        } else {
            res.json(incorrectDummyData);
        }
    }).post(function (req, res) {
        console.log("add data: " + JSON.stringify(req.body.newData()));
        // dummyData.style.push(req.body.newData); //add trail
        dummyData.style.unshift(req.body.newData); //add head
        res.json(dummyData);
    }).delete(function (req, res) {
        res.json({
            youtube: '555',
            message: 'delete'
        })
        console.log('delete with id: ' + req.query.courseStyleID);
        dummyData.style = dummyData.style.filter(function (el) {
            return el.courseStyleID != req.query.courseStyleID;
        })
        res.json(dummyData)
    }).put(function (req, res) {
        res.json({
            youtube: '555',
            message: 'put'
        })
    })

app.delete('/api/style/:id', function (req, res) {
    console.log('delete with id: ' + req.params.courseStyleID);
    dummyData.style = dummyData.style.filter(function (el) {
        return el.courseStyleID != req.params.courseStyleID;
    })
    res.json(dummyData)
})

app.get('/api/style/:user/:pass',function(req,res){
    if (req.params.user == 'admin' && req.params.pass == 'pass') {
        res.json(dummyData)
    } else {
        res.json(incorrectDummyData);
    }
})



//open port
app.listen(3000, function () {
    console.log('restful server is running')
});