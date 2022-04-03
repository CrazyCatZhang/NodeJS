const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongoose_test').then(r => null);

mongoose.connection.once('open', () => {
    console.log('MongoDB连接成功');
});

const Schema = mongoose.Schema;

const stuSchema = new Schema({
    name: String,
    age: Number,
    address: String,
    gender: {
        type: String,
        default: "female"
    }
});

const StuModel = mongoose.model("student", stuSchema);
// StuModel.create([
//     {
//         name: "猪八戒",
//         age: 28,
//         gender: "male",
//         address: "高老庄"
//     },
//     {
//         name: "唐僧",
//         age: 16,
//         gender: "male",
//         address: "女儿国"
//     }
// ], err => {
//     if (!err) {
//         console.log('插入成功');
//     }
// });

// StuModel.find({}, "name age -_id", {skip: 3, limit: 1}, (error, result) => {
//         if (!error) {
//             console.log(result);
//         }
//     }
// );

// StuModel.updateOne({name: "唐僧"}, {$set: {age: 20}}, {}, error => {
//     if (!error) {
//         console.log("修改成功");
//     }
// });

// StuModel.deleteOne({name: "唐僧"}, error => {
//     if (!error) {
//         console.log("删除成功");
//     }
// });

// StuModel.count({}, (err, count) => {
//     if (!err) {
//         console.log(count);
//     }
// });

// const stu = new StuModel({
//     name: "奔波霸",
//     age: 28,
//     gender: "male",
//     address: "碧波潭"
// });
//
// stu.save(function (err) {
//     if (!err) {
//         console.log("保存成功");
//     }
// });

StuModel.findOne({name: "霸波奔"}, (err, result) => {
    if (!err) {
        // result.updateOne({age: 18}, err => {
        //     if (!err) {
        //         console.log('修改成功');
        //     }
        // });

        // result.set('name', 'John');
        // console.log(typeof result.toJSON());
        // console.log(result)

    }
});