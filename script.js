def calcular_tablas_factoriales(numero):
    for i in range(1, numero+1):
        print(f"\nTabla de multiplicar del {i}:")
        for j in range(1, 11):
            resultado = i * j
            print(f"{i} x {j} = {resultado}")
        
        factorial = 1
        for k in range(1, i+1):
            factorial *= k
        
        print(f"Factorial de {i}: {factorial}")