css only apply to component not his child
work like react
shortand attribute src={src} => {src}
@html can parse string to html
$: doubled = count * 2
means doubled = count * 2 and each time count update doubled will be too
you can do multiple statement in it
$: {
    console.log(count)
    etc
}

add if too
$: if ( count <= 10 ){
    console.log(count)
    etc
}

need assignment of variable to update correctly

export is for parameter

export let answer

now <Nested answer={42}/>

{#if count > 10}
    <p> {count} is greater than 10</p>
{:else}
    <p> moins que ca </>
{/if}

# is for opening block

: is for continuing the block

/ is for the end of the block

{#each colors as color, i}
    faire des betise en html
{/each}


{#each colors as color, (color.id)}
    <Thing name={thing.name}/>
{/each}

{#await promise}
    <p>...waiting</>
{:then number}
    <p> the number is {number}</p>
{:catch error}
    <p style=" color: red">{error.message}</p>
{/await}


<button on:click|once={() => aleter('clicked')}
    Click me
</button>
once say what its said there is a lot more modifiers
you can chain them

you can pass event handler to children with a dispatch


data flow from top to bottom
and event go from bottom to top

bind to get value from children


tick => interact with the dom manually

$ prefix to get acces to variable in the store

fetch data in readable store


tweened motion to get progessive value

key block to rerender when certain value changes

<svelte:head> like react helmet
exist for windows, document etc


