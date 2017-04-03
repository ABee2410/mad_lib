function makeStory() {
    // get form values (2 points)
    var lit1 = document.getElementById('lit1').value;
    var lit2 = document.getElementById('lit2').value;
    var place = document.getElementById('place').value;
    var noun1 = document.getElementById('noun1').value;
    var adj1 = document.getElementById('adj1').value;
    var adj2 = document.getElementById('adj2').value;
    var noun2 = document.getElementById('noun2').value;
    var lit3 = document.getElementById('lit3').value;
    var adj3 = document.getElementById('adj3').value;
    var pluralcreature = document.getElementById('pluralcreature').value;
    var verbendinged = document.getElementById('verbendinged').value;
    var bodypart = document.getElementById('bodypart').value;
    var name = document.getElementById('name').value;
    var pluralnoun = document.getElementById('pluralnoun').value;
    var verbendinging = document.getElementById('verbendinging').value;
    var adj4 = document.getElementById('adj4').value;
    var emotion1 = document.getElementById('emotion1').value;
    var adj5 = document.getElementById('adj5').value;
    var verb = document.getElementById('verb').value;
    var emotion2 = document.getElementById('emotion2').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "Frodo and the " + noun2;


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "Still, I wonder if we shall ever be put into " + lit1 + " or " + lit2 + ". We're in one, of course, but I mean: put into words, you know, told by the " + place + ", or read out of a great big " + noun1 + "with " + adj1 + " and " + adj2 + " letters, years and years afterwards. And people will say: 'Let's hear about Frodo and the " + noun2 + "!' And they will say: 'Yes, that's one of my favourite " + lit3 + ". Frodo was very " + adj3 + ", wasn't he, dad?' 'Yes, my boy, the famousest of the " + pluralcreature + ", and that's saying a lot.'";

    var paragraph2 = "'It's saying a lot too much,' said Frodo, and he" + verbendinged + ", a long clear laugh from his " + bodypart + ". Such a sound had not been heard in those places since " + name +  "came to Middle-earth. To Sam suddenly it seemed as if all the " + pluralnoun + " were " + verbendinging + " and the " + adj4 + " rocks leaning over them. But Frodo did not heed them; he laughed again. 'Why, Sam,' he said, 'to hear you somehow makes me as " + emotion1 + " as if the story was already written. But you've left out one of the chief characters: Samwise the " + adj5 + ". 'I want to hear more about Sam, dad. Why didn't they put in more of his talk, dad? That's what I like, it makes me " + verb + ". And Frodo wouldn't have got far without Sam, would he, dad?''";

    var paragraph3 = "'Now, Mr. Frodo,' said Sam, 'you shouldn't make fun. I was " + emotion2 + ".''So was I,' said Frodo, 'and so I am.'";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
 document.getElementById('title').innerHTML = title;
  document.getElementById('paragraph1').innerHTML = paragraph1;
   document.getElementById('paragraph2').innerHTML = paragraph2;
    document.getElementById('paragraph3').innerHTML = paragraph3;
    document.getElementById('image').innerHTML = "<img src='hobbits.jpg'/>";
    document.getElementById('form').style.cssText = 'background-color: #aee1b8; color: #333; border: #aee1b8;';

}
