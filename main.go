package main

import "database/sql"
import _ "github.com/go-sql-driver/mysql"

import "golang.org/x/crypto/bcrypt"

import "net/http"

var db *sql.DB
var err error

func signupPage(res http.ResponseWriter, req *http.Request) {
    if req.Method != "POST" {
        http.ServeFile(res, req, "signup.html")
        return
	}

	username := req.FormValue("username")
	password := req.FormValue("password")

	var user string

    err := db.QueryRow("SELECT username FROM users WHERE username=?", username).Scan(&user)

    switch {
    case err == sql.ErrNoRows:
        hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
        if err != nil {
            http.Error(res, "Server error, unable to create your account.", 500)    
            return
        } 

        _, err = db.Exec("INSERT INTO users(username, password) VALUES(?, ?)", username, hashedPassword)
        if err != nil {
            http.Error(res, "Server error, unable to create your account.", 500)    
            return
        }

        res.Write([]byte("User created!"))
        return
    case err != nil: 
        http.Error(res, "Server error, unable to create your account.", 500)    
        return
    default: 
        http.Redirect(res, req, "/", 301)
    }
}
	
func loginPage(res http.ResponseWriter, req *http.Request) {
	if req.Method != "POST" {
		http.ServeFile(res, req, "login.html")
		return
	}

	username := req.FormValue("username")
	password := req.FormValue("password")

	var databaseUsername string
	var databasePassword string

	err := db.QueryRow("SELECT username, password FROM users WHERE username=?", username).Scan(&databaseUsername, &databasePassword)

	if err != nil {
		http.Redirect(res, req, "/login", 301)
		return
	}

	err = bcrypt.CompareHashAndPassword([]byte(databasePassword), []byte(password))
	if err != nil {
		http.Redirect(res, req, "/login", 301)
		return
	}

	res.Write([]byte("Hello" + databaseUsername))

}

func homePage(res http.ResponseWriter, req *http.Request) {
	http.ServeFile(res, req, "test.html")
}

func main() {
	db, err = sql.Open("mysql", "root:123456@/test")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err.Error())
	}

	http.HandleFunc("/signup", signupPage)
	http.HandleFunc("/login", loginPage)
	http.HandleFunc("/", homePage)
	http.ListenAndServe(":8080", nil)
}

// func sayhelloName(w http.ResponseWriter, r *http.Request) {
//     r.ParseForm() //Parse url parameters passed, then parse the response packet for the POST body (request body)
//     // attention: If you do not call ParseForm method, the following data can not be obtained form
//     fmt.Println(r.Form) // print information on server side.
//     fmt.Println("path", r.URL.Path)
//     fmt.Println("scheme", r.URL.Scheme)
//     fmt.Println(r.Form["url_long"])
//     for k, v := range r.Form {
//         fmt.Println("key:", k)
//         fmt.Println("val:", strings.Join(v, ""))
//     }
//     fmt.Fprintf(w, "Hello astaxie!") // write data to response
// }

// func login(w http.ResponseWriter, r *http.Request) {
//     fmt.Println("method:", r.Method) //get request method
//     if r.Method == "GET" {
//         t, _ := template.ParseFiles("login.gtpl")
//         t.Execute(w, nil)
//     } else {
//         r.ParseForm()
//         // logic part of log in
//         fmt.Println("username:", r.Form["username"])
//         fmt.Println("password:", r.Form["password"])
//     }
// }

// func main() {
//     http.HandleFunc("/", sayhelloName) // setting router rule
//     http.HandleFunc("/login", login)
//     err := http.ListenAndServe(":9090", nil) // setting listening port
//     if err != nil {
//         log.Fatal("ListenAndServe: ", err)
//     }
// }