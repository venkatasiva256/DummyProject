let data=[
	{
		id:111,
		name:"siva",
		dept:"cse"
	},
	{
		id:112,
		name:"stin",
		dept:"ece"
	},
	{
		id:113,
		name:"skin",
		dept:"eee"
	}
	]
data.forEach(function(record)
{for(let x in record){
		console.log(x+": "+record[x]);
	}
});

