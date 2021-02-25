import './style.css';

function Tabledata() {
    return(
    <div>
        <body>
            <h1>Sound Analysis Algorithms</h1>
         <table className="alg-table">
          <tr>
            <th>Algorithm</th>
            <th>Summary</th>
            <th>Implemented?</th>
          </tr>
          <tr>
            <td><a href="#">FFT</a></td>
            <td>A fast Fourier transform (FFT) is an algorithm that computes the discrete Fourier transform (DFT) of a sequence, or its inverse (IDFT). Fourier analysis converts a signal from its original domain (often time or space) to a representation in the frequency domain and vice versa. </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><a href="#">Pitch Detect</a></td>
            <td>A pitch detection algorithm (PDA) is an algorithm designed to estimate the pitch or fundamental frequency of a quasiperiodic or oscillating signal, usually a digital recording of speech or a musical note or tone. This can be done in the time domain, the frequency domain, or both.</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><a href="#">Constant Q</a></td>
            <td>In mathematics and signal processing, the constant-Q transform, simply known as CQT transforms a data series to the frequency domain. It is related to the Fourier transform[ and very closely related to the complex Morlet wavelet transform.</td>
            <td>In progress</td>
          </tr>
        </table> 
        </body>
    </div>
    
    
    
    )
}
export default Tabledata