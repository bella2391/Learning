name := "GeminiHello"
version := "0.1.0"
scalaVersion := "2.13.12" // プロジェクトで使用するScalaのバージョン

mainClass in (Compile, run) := Some("gemini.Hello") // 実行するmainクラスを指定

