    const axios = require('axios');
    const { Telegraf } = require('telegraf');
    const linearsearch=`
    int linearsearch(int arr[],int k)
    {
        for(int i=0;i<arr.size();i++)
        {
            if(arr[i]==k)
            {
                return i;
            }
        }
        return -1;
    }
    `;
    const binarysearch=`
    int binarysearch(int arr[],int k)
    {
       int s=0;
       int e=arr.size()-1;

       while(s<=e)
       {
        int mid=s+(e-s)/2;
        if(arr[mid]==k){
            return mid;
        }
        else if(arr[mid]>k)
        {
            e=mid-1;
        }
        else
        {
            s=mid+1;
        }
       }
       return -1;
    }
    `;
    const bot= new Telegraf('5908348607:AAH7dwgmyV6Ea46YsXgEbd-2IF0Ff-px8VI');
    bot.start((ctx) => ctx.reply("Welcome to rishi's coding bot"));
    bot.command('linearsearch', (ctx) => ctx.reply(linearsearch));
    bot.command('binarysearch', (ctx) => ctx.reply(binarysearch));
     bot.command('selectionsort', async function (ctx) {
        const response = await axios.get('https://raw.githubusercontent.com/loveBabbar/CodeHelp-DSA-Busted-Series/main/Lecture016%20Selection%20Sort/selectionSort.cpp');
                // console.log(response.data);
                return ctx.reply(response.data);
        })
     bot.command('bubblesort', async function (ctx) {
        const response = await axios.get('https://raw.githubusercontent.com/loveBabbar/CodeHelp-DSA-Busted-Series/main/Lecture017%20Bubble%20Sort/bubbleSort.cpp');
                // console.log(response.data);
                return ctx.reply(response.data);
        })
     bot.command('insertionsort', async function (ctx) {
        const response = await axios.get('https://raw.githubusercontent.com/loveBabbar/CodeHelp-DSA-Busted-Series/main/Lecture018%20Insertion%20Sort/insertionSort.cpp');
                // console.log(response.data);
                return ctx.reply(response.data);
        })
     bot.command('quicksort', async function (ctx) {
        const response = await axios.get('https://raw.githubusercontent.com/loveBabbar/CodeHelp-DSA-Busted-Series/main/Lecture036%20Recursion%20Day6/quickSort.cpp');
                // console.log(response.data);
                return ctx.reply(response.data);
        })
    bot.command('mergesort', async function (ctx) {
        const response = await axios.get('https://raw.githubusercontent.com/loveBabbar/CodeHelp-DSA-Busted-Series/main/Lecture035%20Recursion%20Day5/mergeSort.cpp');
                // console.log(response.data);
                return ctx.reply(response.data);
        })
    bot.command('linkedlist', async function (ctx) {
        const response = await axios.get('https://raw.githubusercontent.com/loveBabbar/CodeHelp-DSA-Busted-Series/main/Lecture044%20Linked%20List%20Day1/singlyLinkedList.cpp');
                // console.log(response.data);
                return ctx.reply(response.data);
        })
    bot.on('sticker', (ctx) => ctx.reply('😊'));
    bot.launch();




