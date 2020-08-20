var json = [
    {
        "name": "rajiv",
        "marks": {
            "Maths": "18",
            "English": "21",
            "Science": "45"
        },
        "rollNumber": "KV2017-5A2"
    },
    {
        "name": "abhishek",
        "marks": {
            "Maths": "43",
            "English": "30",
            "Science": "37"
        },
        "rollNumber": "KV2017-5A1"
    },
    {
        "name": "zoya",
        "marks": {
            "Maths": "42",
            "English": "31",
            "Science": "50"
        },
        "rollNumber": "KV2017-5A3"
    }
];
json.sort(function (a, b) {
    return a.name.localeCompare(b.name);
});
$(json).each(function(k,v){
    var total_marks = 0;
    var total_subjects = 0;
    $.each(v.marks,function(subject,marks){
        total_subjects++;
        total_marks =total_marks + parseInt(marks);
    });
    var maximum_marks = total_subjects * 50;
    var minimum_marks = total_subjects * 30;

    if(total_marks < minimum_marks){
        var status = 'fail';
        var color = 'red';
    }else if(total_marks > minimum_marks){
        var status = 'pass';
        var color = 'black';
    }
    if(total_marks > 120)
    {
        var status = 'topper';
        var color = 'green';
    }

    var tr_html = $('#tr_data').html();
    tr_html = tr_html.replace('{name}',v.name);
    tr_html = tr_html.replace('{rollNumber}',v.rollNumber);
    tr_html = tr_html.replace('{marks}',total_marks);
    tr_html = tr_html.replace('{status}',status);
    tr_html = tr_html.replace('{color}',color);
    $('#table_body').append(tr_html);
    console.log(total_marks);
    console.log(total_subjects);
    console.log(v);       
    console.log(status);       
     })