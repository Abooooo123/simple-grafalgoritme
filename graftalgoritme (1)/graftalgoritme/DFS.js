// JavaScript program to find articulation points
// using a naive DFS approach
// Standard DFS to mark all reachable nodes
function dfs(node, adj, visited) {
    visited[node] = true;

    for (let neighbor of adj[node]) {
        if (!visited[neighbor]) {
            dfs(neighbor, adj, visited);
        }
    }
}

// Builds adjacency list from edge list
//function constructadj(V, edges) {
  //  let adj = Array.from({ length: V }, () => []);

    //for (let [u, v] of edges) {
      //  adj[u].push(v);
        //adj[v].push(u);
//    }

  //  return adj;
//}

// Finds articulation points using naive DFS approach
function articulationPoints(V, adj) { //udskiftede edges med ajd
    //const adj = constructadj(V, edges);
    const res = [];

    // Try removing each node one by one
    for (let i = 0; i < V; ++i) {
        let visited = Array(V).fill(false);
        visited[i] = true;

        // count DFS calls from i's neighbors
        let comp = 0;
        for (let it of adj[i]) {

            // early stop if already more than 1 component
            if (comp > 1) break;

            if (!visited[it]) {

                // explore connected part
                dfs(it, adj, visited);
                comp++;
            }
        }

        // if more than one component forms, it's an articulation point
        if (comp > 1){
            res.push(i);
    }
}

    if (res.length === 0){
        return [-1];
    }
    return res;
}

// Driver Code
//const V = 5; // skal være den samme
//const edges = [[0, 1], [1, 4], [2, 3], [2, 4], [3, 4]];// skal være den samme som i klasse graf

//  const ans = articulationPoints(V,edges);
//console.log(ans.join(" "));