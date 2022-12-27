we dont update or append to state (but setState)

setCount(count + 1)

(count ++)

IT WILL BE SET EVENTUALLY (ASYNCHRONOUS NATURE OF STATE)


reason to use useEffect in functional components
(class basedlerde 2. parametre )


useEffect handleing multiple thing 
1- componentDidMount
2- componentDidUpdate

if you dont want anything to get called wenn you load the page 
put   ,[] as depency array in useEffect,  because when it's empty, it only works once and that's when the page is refreshed.
if you write the parameter in the empty repository, for example (count) then you will see it in the console log every time you update

bos olunca cünkü sadece bir kez calisir o da sayfa yenilenince
eger bos depencynsi icine parametreyi yazarsan mesela (count) o zaman her updatede console logda görürsün
